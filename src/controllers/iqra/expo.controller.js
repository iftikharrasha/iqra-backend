const { getHomePageService, getSearchPageService, getSurahPageService, getAyatsPageService, getTafsirPageService } = require("../../services/iqra/expo.service");


const getHomePage = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const data = await getHomePageService();
        response.data = data;
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            data: null,
            signed_in: false,
            version: 1,
            error: { 
                code: 500, 
                message: "An Internal Error Has Occurred!",
                target: "approx what the error came from", 
            }
        });
    }
}

const getSearchPage = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const data = await getSearchPageService();
        response.data = data;
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            data: null,
            signed_in: false,
            version: 1,
            error: { 
                code: 500, 
                message: "An Internal Error Has Occurred!",
                target: "approx what the error came from", 
            }
        });
    }
}

const getSurahPage = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const { id } = req.params;

        const data = await getSurahPageService(id);
        response.data = data;
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            data: null,
            signed_in: false,
            version: 1,
            error: { 
                code: 500, 
                message: "An Internal Error Has Occurred!",
                target: "approx what the error came from", 
            }
        });
    }
}

const getAyatsPage = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const { id } = req.params;

        const data = await getAyatsPageService(id);
        response.data = data;
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            data: null,
            signed_in: false,
            version: 1,
            error: { 
                code: 500, 
                message: "An Internal Error Has Occurred!",
                target: "approx what the error came from", 
            }
        });
    }
}

const getTafsirPage = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const { id, aid } = req.params;

        const data = await getTafsirPageService(id, aid);
        response.data = data;
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            data: null,
            signed_in: false,
            version: 1,
            error: { 
                code: 500, 
                message: "An Internal Error Has Occurred!",
                target: "approx what the error came from", 
            }
        });
    }
}

module.exports = {
    getHomePage,
    getSearchPage,
    getSurahPage,
    getAyatsPage,
    getTafsirPage,
}