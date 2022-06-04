import bcrypt from 'bcryptjs'

const handler = async (req:any, res: any) => {
    const body = req.body
    const email = await prisma.user.findUnique({
        where: {
          email: body.email
        },
    });

    if (email) {
        res.status(200).json({ message: 'Already registered'})
        return;
    }

    // create user if email not found in database
    await prisma.user.create({
        data: {
            email: body.email        
        }
    })

    // generate salt to hash password 
    const salt = await bcrypt.genSalt(10)
    // now we set user password to hashed password
    const password = await bcrypt.hash(body.password, salt)

    // update user password
    await prisma.user.update({
        where: email,
        data: {
            password: password
        }
    })
    res.status(200).json({ message: 'Registered successfuly' })

}


export default handler
