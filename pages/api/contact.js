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
      to: email,
      subject: `Kapcsolati űrlap IllésInnovate`,
      html: `
      <html>
        <head>
        <style>
        /* A táblázat stílusa */
        table {
            /* Teljes szélesség */
            width: 100%;
            /* Szürke keret */
            border: 1px solid rgba(128, 128, 128, 0);
            /* Kerekített sarkok */
            border-radius: 10px;
        }

        /* A táblázat fejlécének stílusa */
        th {
            /* Kék háttérszín */
            /* Fehér szövegszín */
            color: white;
            /* Középre igazított szöveg */
            text-align: center;
            /* Nagy betűméret */
            font-size: 24px;
            /* Nagy betűtávolság */
            letter-spacing: 2px;
        }

        /* A gomb stílusa */
        .koszones{
            padding-top: 43px;
        }
        td{
            padding: 10px;
            text-align: left;
            position: relative;
            left: 20%;
        }

        .brand{
            width: 100%;
        }

        .brand img {
            border: 0;
            display: block;
            outline: none;
            text-decoration: none;
            height: 45px;
            width: 100%;
            font-size: 16px;
        }

        </style>
        </head>
        <body>
            <!-- A táblázat eleme -->
            <table>
            <!-- A táblázat fejléce -->
            <th class='brand'>
                <img src='https://i.ibb.co/HgZ05vN/profile.png'>
            </h>
            <!-- A táblázat tartalma -->
            <tr>
                <td class='koszones'>Kedves ${name},</td>
            </tr>
            <tr>
                <td>Köszönöm, hogy felvette velem a kapcsolatot! Örömmel értesítem, hogy sikeresen megérkezett a megkeresése.</td>
            </tr>
            <tr>
                <td>Az Ön által megadott információk alapján, az alábbi üzenetet kaptuk:
                    <br><br>
                    <hr>
                </td>
            </tr>
            
            <tr>
                <td>Név: ${name}</td>
            </tr>
            <tr>
                <td>Email: ${email}</td>
            </tr>
            <tr>
                <td>Telefonszám: ${phone}</td>
            </tr>
            <tr>
                <td>Üzenet: ${message}
                    <br><br>
                    <hr>
                </td>
            </tr>
            <tr>
                <td>Hamarosan fel fogom Önnel venni a kapcsolatot a megadott elérhetőségein keresztül. Addig is, ha bármilyen kérdése vagy észrevétele van, ne habozzon vegye fel velem a
                    a kapcsolatot.
                    <br>
                </td>
            </tr>
            <tr>
                <td>Köszönettel,</td>
            </tr>
            <tr>
                <td>Illés Innovate</td>
            </tr>
            <!-- A táblázat lábléce -->

            <tr>
            <td style='background-color: #f9f9f9; text-align:center; padding: 15px 0;'>
                    <p style='font-size: 14px; margin: 0; color: #888;'>Illés Ákos | IllésInnovate | Telefon: +36 20 248 2005 | Email: info@illesinnovate.hu</p>
                    <p style='font-size: 14px; margin: 0; color: #888;'>© 2023 Illés Innovate. Minden jog fenntartva.</p>
                </td>
            </tr>
            </table>
        </body>
        </html>";
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
