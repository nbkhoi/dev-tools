export const handler = (event, context, callback) => {
    var host = "http://nohost";
    var env = "test";
    if (event.userPoolId === "ap-southeast-1_IEJuq0rTH") {
        host = "http://11.11.7.236:3001"
        env = "test";
    }

    const fi = "fi";
    
    var lang = event.request.userAttributes["custom:language"] === undefined ? "en" : event.request.userAttributes["custom:language"];
    var email = event.request.userAttributes.email;
    var code = event.request.codeParameter;
    var tmpLink = `${host}/${lang}/booking/#/membership/resetPassword?email=${email}&code=${code}`;
    var customMessageForgotPassword;
    
    if (lang === fi) {
        customMessageForgotPassword = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
                <!--[if gte mso 9]><xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml><![endif]-->
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
                <meta http-equiv="X-Outlook-Render" content="edge"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0 "/>
                <meta name="format-detection" content="telephone=no"/>
                <style type="text/css" >
                    u ~ div .gmail-hide {
                      display:none !important;
                  }
                  u ~ div .gmail-show {
                      display:block !important;
                  }
              </style>
              <style type="text/css" >
                [owa] .owa-hide {
                  display:none;
              }
              [owa] .owa-show {
                  display:block !important;
              }
          </style>
          <style type="text/css" >
            @media screen yahoo {
                .yahoo-hide {
                    display:none!important;
                }
                .yahoo-show {
                    display:block!important;
                }
            }
        </style>
        <style type="text/css" >
              @media screen yahoo {
               .yahoo-hide {
                display:none!important;
            }
            .yahoo-show {
                display:block!important;
            }
        }
        </style>
        </head>
        
        <body style="margin:0;padding:0;">
            <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="vertical-align:top;width:100% !important;width:100vw !important;">
                <tbody>
                    <tr>
                        <td>
                            <!-- CONTAINER BLOCK STARTS -->
                            <table align="center" width="680" cellspacing="0" cellpadding="0" style="margin:auto;border:none;background-color:#ffffff;border-collapse:collapse;">
                                <tbody>
                                    <!-- HEADER BLOCK STARTS -->
                                    <tr>
                                        <td style="padding:0px 0px 50px 0px; background-color: #FCFCFC;">
                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                                                <tbody>
                                                    <tr>
                                                        <td width="70%" height="55" align="left" style="padding:0px 0px 0px 50px;margin:0px;background-color:#E01F29;">
                                                            <img alt="" width="175" height="30" src="https://nelson-prod-mail-images.s3-eu-west-1.amazonaws.com/common/omenahotels_logo_white.png"/>
                                                        </td>
                                                        <td width="30%" height="55" align="right" style="padding:0px 50px 0px 0px;">
                                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="right" style="padding:5px 0px 2px 0px;margin:0px;color:#fff;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;color: #E01F29;">
                                                                            Salasanan vaihtaminen
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="right" style="padding:2px 0px 5px 0px;font-weight:bold;margin:0px;color:#fff;font-size:16px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;color: #E01F29;">
                                                                            
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- HEADER BLOCK ENDS -->
        
                                    <!-- LETTER BLOCK STARTS -->
                                    <tr>
                                        <td style="padding:0px 0px 50px 0px; background-color: #FCFCFC;">
                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FCFCFC;">
                                                <tbody>
                                                    <!-- MAIN LETTER BLOCK STARTS -->
                                                    <tr>
                                                        <td align="left" style="padding:0px 50px 0px 50px;margin:0px;">
                                                            <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                                Hei,
                                                         </p>
                                                     </td>
                                                 </tr>
        
                                                 <!-- RESET PASSWORD BLOCK STARTS -->
                                                 <tr>
                                                    <td width="100%" align="left" style="vertical-align:top;padding:0px 50px 0px 50px;margin:0px;">
                                                        <p style="margin:15px 0px 0px 0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Vaihda salasanasi painamalla alla olevaa painiketta:
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="200" align="left" style="padding:15px 100px 0px 100px; ;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                        <a href="${dynamicLink}" style="text-decoration:none;color:#ffffff;font-weight:normal;text-transform:none;" target="_blank">
                                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="200" style="border-radius: 5px;background-color: #D5232B;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" style="color:#ffffff;padding:5px 0px 5px 0px; margin: 0px;font-size: 14px;font-family: 'Open Sans','Soleil', 'futura-pt', 'Helvetica', 'Arial', sans-serif;">
                                                                            <a href="${dynamicLink}" style="text-decoration:none;color:#ffffff;font-weight:normal;text-transform:none;" target="_blank">
                                                                                VAIHDA SALASANA
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%" align="left" style="vertical-align:top;padding:0px 50px 0px 50px;margin:0px;">
                                                        <p style="margin:15px 0px 0px 0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Jos et pyytänyt salasanan vaihtamista, voit jättää tämän sähköpostin huomioimatta.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <!-- RESET PASSWORD BLOCK ENDS -->
        
                                                <tr>
                                                    <td align="left" style="padding:15px 50px 0px 50px;margin:0px;">
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Ystävällisin terveisin,
                                                        </p>
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Omena-hotellit
                                                        </p>
                                                    </td>
                                                </tr>
                                                <!-- MAIN LETTER BLOCK ENDS -->
                                                
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- LETTER BLOCK ENDS -->
                                
                                <!-- OMENA HOTEL HELPDESK STARTS -->
                                <tr>
                                    <td width="100%" align="center" style="width:100%;padding:15px 50px 30px 50px;">
                                        <table border="0" role="presentation" cellpadding="0" width="680" cellspacing="0" style="background-color:#ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td width="680" align="center" style="padding:0px;margin:0px;">
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-weight: bold;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            <a href="https://www.omenahotels.com/" target="_blank" style="text-decoration: none;">
                                                                <span style="color: #D5232B;">
                                                                    omenahotels.com
                                                                </span>
                                                            </a> Asiakaspalvelu (24/7) +358 600 555 222
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding:0px;margin:0px;">
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            0,79 €/min + pvm.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- OMENA HOTEL HELPDESK ENDS -->
        
                                <!-- SOCIAL MEDIA BLOCK STARTS -->
                                <tr>
                                    <td width="60%" align="center" style="width:60%;padding:0px 50px 30px 50px;">
                                        <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="60%" style="width:60%;background-color:#ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.facebook.com/Omenahotels/"><img alt="" width="40" height="40" src="https://nelson-prod-mail-images.s3-eu-west-1.amazonaws.com/common/some_fb.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.youtube.com/channel/UCUx22Ck1ssxvMro-LrCa5pQ?view_as=subscriber"><img alt="" width="40" height="40" src="https://nelson-prod-mail-images.s3-eu-west-1.amazonaws.com/common/some_yt.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.instagram.com/omenahotellit/"><img alt="" width="40" height="40" src="https://nelson-prod-mail-images.s3-eu-west-1.amazonaws.com/common/some_ig.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="${host}/${lang}/services/"><img alt="" width="40" height="40" src="https://nelson-prod-mail-images.s3-eu-west-1.amazonaws.com/common/some_info.png"/></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- SOCIAL MEDIA BLOCK ENDS -->
                                
                                
                                <!-- FOOTER BLOCK STARTS -->
                                <tr>
                                    <td width="100%" align="center" style="width:100%;padding:0px 50px 30px 50px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            © 2020 Omena Hotellit Oy | Omenahotels.com
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Lähetetty osoitteeseen: ${email}
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Omena Hotels <a href="${host}/en/terms-and-conditions/" target="_blank" style="padding:0px;margin:0px;text-decoration:underline;font-weight:normal;text-transform:none;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Varausehdot</a> | Asiakasrekisteri
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Osoitelähde: Omena Hotels -asiakasrekisteri
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Omena Hotellit Oy, PL 40, 65101 Vaasa, Finland
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Y-tunnus: 1579157-0
                                        </p>
                                    </td>
                                </tr>
                                <!-- FOOTER BLOCK ENDS -->
                                
                            </tbody>
                            </table>
                        <!-- CONTAINER BLOCK ENDS -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
        `;
        
    } else {
        customMessageForgotPassword = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
                <!--[if gte mso 9]><xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml><![endif]-->
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
                <meta http-equiv="X-Outlook-Render" content="edge"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0 "/>
                <meta name="format-detection" content="telephone=no"/>
                <style type="text/css" >
                    u ~ div .gmail-hide {
                      display:none !important;
                  }
                  u ~ div .gmail-show {
                      display:block !important;
                  }
              </style>
              <style type="text/css" >
                [owa] .owa-hide {
                  display:none;
              }
              [owa] .owa-show {
                  display:block !important;
              }
          </style>
          <style type="text/css" >
            @media screen yahoo {
                .yahoo-hide {
                    display:none!important;
                }
                .yahoo-show {
                    display:block!important;
                }
            }
        </style>
        <style type="text/css" >
              @media screen yahoo {
               .yahoo-hide {
                display:none!important;
            }
            .yahoo-show {
                display:block!important;
            }
        }
        </style>
        </head>
        
        <body style="margin:0;padding:0;">
            <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="vertical-align:top;width:100% !important;width:100vw !important;">
                <tbody>
                    <tr>
                        <td>
                            <!-- CONTAINER BLOCK STARTS -->
                            <table align="center" width="680" cellspacing="0" cellpadding="0" style="margin:auto;border:none;background-color:#ffffff;border-collapse:collapse;">
                                <tbody>
                                    <!-- HEADER BLOCK STARTS -->
                                    <tr>
                                        <td style="padding:0px 0px 50px 0px; background-color: #FCFCFC;">
                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                                                <tbody>
                                                    <tr>
                                                        <td width="60%" height="75" align="left" style="padding:0px 0px 0px 50px;margin:0px;background-color:#0a71a1;">
                                                        <img alt="" width="250" height="60" src="https://t-hospitality-image-bucket.s3.ap-southeast-1.amazonaws.com/T-Hospitality/logo.png" />
                                                        </td>
                                                        <td width="30%" height="55" align="right" style="padding:0px 50px 0px 0px;">
                                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="right" style="padding:5px 0px 2px 0px;margin:0px;color:#fff;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;color: #0a71a1;">
                                                                            Password reset
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="right" style="padding:2px 0px 5px 0px;font-weight:bold;margin:0px;color:#fff;font-size:16px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;color: #0a71a1;">
                                                                            
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- HEADER BLOCK ENDS -->
        
                                    <!-- LETTER BLOCK STARTS -->
                                    <tr>
                                        <td style="padding:0px 0px 50px 0px; background-color: #FCFCFC;">
                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FCFCFC;">
                                                <tbody>
                                                    <!-- MAIN LETTER BLOCK STARTS -->
                                                    <tr>
                                                        <td align="left" style="padding:0px 50px 0px 50px;margin:0px;">
                                                            <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                                Hello,
                                                         </p>
                                                     </td>
                                                 </tr>
        
                                                 <!-- RESET PASSWORD BLOCK STARTS -->
                                                 <tr>
                                                    <td width="100%" align="left" style="vertical-align:top;padding:0px 50px 0px 50px;margin:0px;">
                                                        <p style="margin:15px 0px 0px 0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Reset your password by clicking the button below:
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="200" align="left" style="padding:15px 100px 0px 100px; ;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                        <a href="${tmpLink}" style="text-decoration:none;color:#ffffff;font-weight:normal;text-transform:none;" target="_blank">
                                                            <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="200" style="border-radius: 5px;background-color: #259DD8;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" style="color:#ffffff;padding:5px 0px 5px 0px; margin: 0px;font-size: 14px;font-family: 'Open Sans','Soleil', 'futura-pt', 'Helvetica', 'Arial', sans-serif;">
                                                                            <a href="${tmpLink}" style="text-decoration:none;color:#ffffff;font-weight:normal;text-transform:none;" target="_blank">
                                                                                RESET PASSWORD
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%" align="left" style="vertical-align:top;padding:0px 50px 0px 50px;margin:0px;">
                                                        <p style="margin:15px 0px 0px 0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            If you didn't request a password reset, you can ignore this email
                                                        </p>
                                                    </td>
                                                </tr>
                                                <!-- RESET PASSWORD BLOCK ENDS -->
        
                                                <tr>
                                                    <td align="left" style="padding:15px 50px 0px 50px;margin:0px;">
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            Kind regards,
                                                        </p>
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            T-Hospitality
                                                        </p>
                                                    </td>
                                                </tr>
                                                <!-- MAIN LETTER BLOCK ENDS -->
                                                
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- LETTER BLOCK ENDS -->
                                
                                <!-- DEFAULT PROPERTY HELPDESK STARTS -->
                                <tr>
                                    <td width="100%" align="center" style="width:100%;padding:15px 50px 30px 50px;">
                                        <table border="0" role="presentation" cellpadding="0" width="680" cellspacing="0" style="background-color:#ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td width="680" align="center" style="padding:0px;margin:0px;">
                                                        <p style="padding:0px;margin:0px;font-size:14px;font-weight: bold;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                                            <a href="https://www.thospitality.com/" target="_blank" style="text-decoration: none;">
                                                                <span style="color: #259DD8;">
                                                                thospitality.com
                                                                </span>
                                                            </a> Helpdesk (24/7) 259DD8
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- DEFAULT PROPERTY HELPDESK ENDS -->
        
                                <!-- SOCIAL MEDIA BLOCK STARTS -->
                                <tr>
                                    <td width="60%" align="center" style="width:60%;padding:0px 50px 30px 50px;">
                                        <table border="0" role="presentation" cellpadding="0" cellspacing="0" width="60%" style="width:60%;background-color:#ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.facebook.com/thospitality/"><img alt="" width="40" height="40" src="https://t-hospitality-image-bucket.s3.ap-southeast-1.amazonaws.com/T-Hospitality/email/some_fb.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.youtube.com/channel/UCUx22Ck1ssxvMro-LrCa5pQ?view_as=subscriber"><img alt="" width="40" height="40" src="https://t-hospitality-image-bucket.s3.ap-southeast-1.amazonaws.com/T-Hospitality/email/some_fb.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="https://www.instagram.com/thospitality/"><img alt="" width="40" height="40" src="https://t-hospitality-image-bucket.s3.ap-southeast-1.amazonaws.com/T-Hospitality/email/some_ig.png"/></a>
                                                    </td>
                                                    <td align="center" style="padding:0px 3px 0px 3px;margin:0px;">
                                                        <a href="${host}/${lang}/services/"><img alt="" width="40" height="40" src="https://t-hospitality-image-bucket.s3.ap-southeast-1.amazonaws.com/T-Hospitality/email/some_ig.png"/></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <!-- SOCIAL MEDIA BLOCK ENDS -->
                                
                                
                                <!-- FOOTER BLOCK STARTS -->
                                <tr>
                                    <td width="100%" align="center" style="width:100%;padding:0px 50px 30px 50px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            © 2023 T-Hospitality Ltd | thospitality.com
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Sent to: ${email}
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            T-Hospitality <a href="${host}/en/terms-and-conditions/" target="_blank" style="padding:0px;margin:0px;text-decoration:underline;font-weight:normal;text-transform:none;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Booking Terms &amp; Conditions</a> | Customer register
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Address source: T-Hospitality Customer registry
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            T-Hospitality Ltd, Ho Chi Minh City, Vietnam
                                        </p>
                                        <p style="padding:0px;margin:0px;font-size:14px;font-family:'Open Sans','Soleil','futura-pt','Helvetica','Arial',sans-serif;">
                                            Business ID: 09999999
                                        </p>
                                    </td>
                                </tr>
                                <!-- FOOTER BLOCK ENDS -->
                                
                            </tbody>
                            </table>
                        <!-- CONTAINER BLOCK ENDS -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
        `;
    }
    
    if(event.triggerSource == 'CustomMessage_ForgotPassword') {
        if (lang === fi) {
            event.response.emailSubject = "Salasanan vaihtaminen";
        } else {
            event.response.emailSubject = "Reset password";
        }
        
        event.response.emailMessage = customMessageForgotPassword;
    }
    // Return to Amazon Cognito
    callback(null, event);
};
