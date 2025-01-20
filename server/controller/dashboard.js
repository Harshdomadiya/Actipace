const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");

exports.dashboard = async (req, res) => {
  try {
    const { email } = req.user;

    console.log(email);

    const data = await prisma.purchase.findMany({
      where: {
        email: email,
      },
      include: {
        software: true,
        softwarePlan: true,
      },
    });

    //console.log(data);
    const apidata = await axios.get(
      `https://actipace.com/ts/deviceget.php?email=${email}`
    );


    const licenses = [];
    let count=0;

    if(apidata.data){
        const apdata = apidata.data.split("$@");

    // Extract count
        count = Number(apdata[0]);

        // Initialize licenses array
       

        // Process license details
        for (let i = 1; i < apdata.length; i += 3) {
        licenses.push({
            licenseKey: apdata[i],
            computerName: apdata[i + 1],
            operatingSystem: apdata[i + 2],
        });
        }
    }
    

    // Combine into final JSON
    const jsonResult = {
      count,
      licenses,
    };

    return res.status(200).json({
      success: true,
      data,
      jsonResult
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "error in getting plan",
    });
  }
};
