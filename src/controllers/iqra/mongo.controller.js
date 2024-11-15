const { getMongoAyatService, getMongoSurahService, surahBulkUploadService, ayatBulkUploadService } = require("../../services/iqra/mongo.service");

const getMongoSurah = async (req, res, next) => {
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
        const data = await getMongoSurahService();

        if (data.length > 0) {
            response.data = data;
        }else{
            response.success = false;
            response.status = 400;
            response.error = {
                code: 400,
                message: "No mongo items found!",
                target: "database"
            }
        }
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

    res.send(response);
}

const surahBulkUpload = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        version: 1,
        data: {},
        error: null,
        message: "Success",
    }
    try {
        const result = await surahBulkUploadService(req.body);

        response.data = result;
        response.message = "All Surah Uploaded successfully";

        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Data is not inserted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const getMongoAyat = async (req, res, next) => {
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
        const data = await getMongoAyatService();

        if (data.length > 0) {
            response.data = data;
        }else{
            response.success = false;
            response.status = 400;
            response.error = {
                code: 400,
                message: "No mongo items found!",
                target: "database"
            }
        }
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

    res.send(response);
}

const ayatBulkUpload = async (req, res, next) => {
    console.log(`${req.originalUrl}`);
    let response = {
        success: true,
        status: 200,
        version: 1,
        data: {},
        error: null,
        message: "Success",
    }
    try {
        const result = await ayatBulkUploadService(req.body);

        response.data = result;
        response.message = "All Ayat Uploaded successfully";

        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Data is not inserted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

module.exports = {
    getMongoSurah,
    getMongoAyat,
    surahBulkUpload,
    ayatBulkUpload,
}