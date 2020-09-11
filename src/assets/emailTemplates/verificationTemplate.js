import bannerImage from '../images/html.svg';
import facebookIcon from '../icons/facebookIcon.svg';
import twitterIcon from '../icons/twitterIcon.svg';


module.exports = {
    
    verifyTemplate: function(title, headlineInput, contentTopInput, content1Image, content1Text, content2Image, content2Text) {
        
        
        
        
        
        
        const doc = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        ${htmlElem}
        `;
        
        const htmlElem = `<html xmlns="http://www.w3.org/1999/xhtml">${headElem, bodyElem}</html>`;
        
        const headElem = `
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
        `;
        
        const bodyElem = `
            <body style="margin: 0; padding: 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                    <tr>
                        <td style="padding: 10px 0 30px 0;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                                ${topBanner}
                                <tr>
                                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            ${headLine}
                                            <tr>
                                                <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td width="260" valign="top">
                                                                ${content1}
                                                            </td>
                                                            <td style="font-size: 0; line-height: 0;" width="20">
                                                                &nbsp;
                                                            </td>
                                                            <td width="260" valign="top">
                                                                ${content2}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                ${footer}
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            `;

            const footer =  `
                <tr>
                    <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                    &reg; Credeology, All Rights Reserved<br/>
                                    
                                </td>
                                <td align="right" width="25%">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                ${twitterIcon}
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                            <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                ${facebookIcon}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            `;

            const topBanner = `
                <tr>
                    <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                    <img src="${bannerImage}" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                    </td>
                </tr>
            `;

            const headLine = `
                <tr>
                    <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                        <b>${headlineInput}</b>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                        ${contentTopInput}
                    </td>
                </tr>
            `;

            const content1 = `
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <img src="${content1Image}" alt="" width="100%" height="140" style="display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                            ${content1Text}
                        </td>
                    </tr>
                </table>
            `;

            const content2 = `
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <img src="${content2Image}" alt="" width="100%" height="140" style="display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                        ${content2Text}
                        </td>
                    </tr>
                </table>
            `;

        return doc;
    }
}