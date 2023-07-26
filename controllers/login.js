const appointment = require('../models/login');

 
exports.getUser=async (req, res, next) => {
    try {
    const allAppointments = await appointment.findAll();
    res.status(200).json({ appointments: allAppointments });
        

      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
}


exports.addUser=async (req, res, next) => {
    try {
        const Username= req.body.Username;
        const PhoneNumber= req.body.PhoneNumber;
        const Email= req.body.Email;
        const newAppointment=await appointment.create({
      Username: Username,
        PhoneNumber:PhoneNumber,
        Email:Email,
       })
       res.status(201).json({ appointment: newAppointment });
       console.log('addUser function called');
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


