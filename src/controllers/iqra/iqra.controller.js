const { getIqraBookService, createIqraParaService, deleteIqraBookService, deleteSingleIqraParaService, updateSingleIqraParaService, createIqraSurahService, deleteSingleIqraSurahService, updateSingleIqraSurahService, createIqraAyatService, deleteSingleIqraAyatService, updateSingleIqraAyatService, getSingleIqraParaService, getSingleIqraSurahService, getSingleIqraAyatService } = require("../../services/iqra/iqra.service");

const getIqraBook = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
    try {
        const data = await getIqraBookService();

        if (data.length > 0) {
            response.data = data;
        }else{
            response.success = false;
            response.status = 400;
            response.error = {
                code: 400,
                message: "No iqra items found!",
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

//para
const createIqraPara = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        version: 1,
        data: {},
        error: null,
        message: "Success",
    }
    try {
        // save or create
        const result = await createIqraParaService(req.body);

        response.data = result;
        response.message = "Para created successfully";

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

const getSingleIqraPara = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const data = await getSingleIqraParaService(req.params.id);
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

const deleteIqraBook = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: {},
        error: null
    }
    try {
        const result = await deleteIqraBookService();
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Could not reset data";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }

        response.version = result.version;
        response.message = "All data reseted successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 500;
        response.message = "Could not reset data";
        response.error = {
            code: 500,
            message: error.message,
            target: "client side api calling issue"
        }

        res.status(500).send(response);
    }
};

const deleteSingleIqraPara = async (req, res, next) => {
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
    
        const result = await deleteSingleIqraParaService(id);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Para is not deleted";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Para deleted successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Data is not deleted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const updateSingleIqraPara = async (req, res, next) => {
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
        const data = req.body;
    
        const result = await updateSingleIqraParaService(id, data);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Para is not updated";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Para updated successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Para is not updated";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

//surah
const createIqraSurah = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        version: 1,
        data: {},
        error: null,
        message: "Success",
    }
    try {
        const { id } = req.params;
        const result = await createIqraSurahService(id, req.body);

        response.data = result;
        response.message = "Surah created successfully";

        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Surah is not inserted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const getSingleIqraSurah = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const data = await getSingleIqraSurahService(req.params.id);
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

const deleteSingleIqraSurah = async (req, res, next) => {
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
    
        const result = await deleteSingleIqraSurahService(id);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Surah is not deleted";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Surah deleted successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Data is not deleted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const updateSingleIqraSurah = async (req, res, next) => {
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
        const data = req.body;
    
        const result = await updateSingleIqraSurahService(id, data);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Surah is not updated";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Surah updated successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Surah is not updated";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

//ayat
const createIqraAyat = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        version: 1,
        data: {},
        error: null,
        message: "Success",
    }
    try {
        const { id } = req.params;
        const result = await createIqraAyatService(id, req.body);

        response.data = result;
        response.message = "Ayat created successfully";

        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Ayat is not inserted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const getSingleIqraAyat = async (req, res, next) => {
    let response = {
        success: true,
        status: 200,
        signed_in: false,
        version: 1,
        data: [],
        error: null
    }
            
    try {
        const data = await getSingleIqraAyatService(req.params.id);
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

const deleteSingleIqraAyat = async (req, res, next) => {
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
    
        const result = await deleteSingleIqraAyatService(id);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Ayat is not deleted";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Ayat deleted successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Data is not deleted";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

const updateSingleIqraAyat = async (req, res, next) => {
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
        const data = req.body;
    
        const result = await updateSingleIqraAyatService(id, data);
    
        if (!result) {
            response.success = false;
            response.status = 400;
            response.message = "Ayat is not updated";
            response.error = {
                code: 400,
                message: error.message,
                target: "client side api calling issue"
            }

            return res.send(response);
        }
  
        response.message = "Ayat updated successfully";
        res.send(response);
    } catch (error) {
        response.success = false;
        response.status = 400;
        response.message = "Ayat is not updated";
        response.error = {
            code: 400,
            message: error.message,
            target: "client side api calling issue"
        }

        res.send(response);
    }
};

module.exports = {
    getIqraBook,
    createIqraPara,
    getSingleIqraPara,
    deleteIqraBook,
    deleteSingleIqraPara,
    updateSingleIqraPara,
    createIqraSurah,
    getSingleIqraSurah,
    deleteSingleIqraSurah,
    updateSingleIqraSurah,
    createIqraAyat,
    getSingleIqraAyat,
    deleteSingleIqraAyat,
    updateSingleIqraAyat
}