import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.send({
                suc: false,
                msg: "User not authenticated"
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_TOKEN);
        if(!decode) {
            return res.send({
                suc: false,
                msg: "Token invalid"
            });
        }

        req.id = decode.userid;
        next();
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};

export const adminAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.send({
                suc: false,
                msg: "Admin not authenticated"
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_TOKEN);
        if(!decode) {
            return res.send({
                suc: false,
                msg: "Token invalid"
            });
        }

        req.id = decode.adminid;
        next();
    } catch (error) {
        console.error(error.message);
        res.send({
            suc: false,
            msg: error.message
        });
    }
};