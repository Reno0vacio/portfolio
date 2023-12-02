import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, phone, message } = req.body;

  const user = process.env.user;

  const transporter = nodemailer.createTransport({
    host: "tesixtyone.tarhely.eu",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "illes.akos@illesinnovate.hu",
      subject: `Új Űrlap érkezett ${name}`,
      html: `
      <html>
        <head>
            <meta charset='UTF-8'>
            <title>Új űrlap érkezett</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.5;
                    color: #333;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Poppins', sans-serif;
                    color: #222;
                    margin-top: 0;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin-bottom: 30px;
                }
                table td, table th {
                    padding: 10px;
                    border: 1px solid #ddd;
                    text-align: left;
                }
                table th {
                    background-color: #f5f5f5;
                }
                .btn {
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #333;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Új űrlap érkezett</h1>
            <p>Kedves Kolléga,</p>
            <p>Ez az e-mail értesítést küld az új űrlap érkezéséről. Az űrlap a következő adatokat tartalmazza:</p>
            
            <table>
                <thead>
                    <tr>
                        <th>Mező</th>
                        <th>Érték</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Név:</strong></td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td><strong>E-mail cím:</strong></td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td><strong>Telefon:</strong></td>
                        <td>${phone}</td>
                    </tr>
                    <tr>
                        <td><strong>Üzenet:</strong></td>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>
            
    
            <p>Üdvözlettel,</p>
            <p>Illés Innovate</p>
            <p>Vezetőség</p>
        </body>
        </html>;
        `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Could not send the email. Your messge was not sent" });
  }

  return res.status(200).json({ message: "success" });
}
