import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";
import mailjet from "node-mailjet";
// import { IMailServer, MailServerModel, ServerType } from "../graphql/modules/mailServer/mailServer.model";
// import { IUserNotification, NotificationStatus, UserNotificationModel } from "../graphql/modules/userNotification/userNotification.model";
// import { CourierClient } from "@trycourier/courier";
// import { CourierModel } from "../graphql/modules/courier/courier.model";

export class MailHelper {
  constructor() { }

  // sendSendgridMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     sgMail.setApiKey(mailServer.apiKey);

  //     const msg = {
  //       from: {
  //         email: notification.from,
  //         name: notification.fromName,
  //       },
  //       to: notification.to,
  //       subject: notification.subject,
  //       // text,
  //       html: notification.content,
  //     };

  //     await sgMail.send(msg).then(async msg => {
  //       await UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.SENT
  //         }
  //       });
  //     }).catch(async error => {
  //       await Promise.all([
  //         MailServerModel.findByIdAndUpdate(mailServer.id, {
  //           $set: {
  //             error: error.message
  //           }
  //         }),
  //         UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.ERROR
  //           }
  //         })
  //       ]);
  //     });
  //   } catch (error) {
  //     await Promise.all([
  //       MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error: error.message
  //         }
  //       }),
  //       UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.ERROR
  //         }
  //       })
  //     ]);
  //   }
  // };

  // sendGoogleMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     const mailTransporter = nodemailer.createTransport({
  //       //https://myaccount.google.com/lesssecureapps?pli=1
  //       service: mailServer.service,
  //       auth: {
  //         user: mailServer.user,
  //         pass: mailServer.pass,
  //       },
  //       authMethod: "plain"
  //     });

  //     const mailDetails = {
  //       from: notification.from,
  //       to: notification.to,
  //       subject: notification.subject,
  //       html: notification.content,
  //     };

  //     // console.log('notification', notification);

  //     let error = null;
  //     await mailTransporter.sendMail(mailDetails, (err: Error) => {
  //       if (err) {
  //         error = err;
  //       }
  //     });

  //     if (error) {
  //       await Promise.all([
  //         MailServerModel.findByIdAndUpdate(mailServer.id, {
  //           $set: {
  //             error: error
  //           }
  //         }),
  //         UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.ERROR
  //           }
  //         })
  //       ]);
  //     }
  //     else {
  //       // console.log('update', notification.id)
  //       await UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.SENT
  //         }
  //       })
  //     }
  //   } catch (error) {
  //     await Promise.all([
  //       MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error: error.message
  //         }
  //       }),
  //       UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.ERROR
  //         }
  //       })
  //     ]);
  //   }
  // };

  // sendMailTrapMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     //https://mailtrap.io/inboxes
  //     const mailTransporter = nodemailer.createTransport({
  //       host: mailServer.host,
  //       port: mailServer.port,
  //       auth: {
  //         user: mailServer.user,
  //         pass: mailServer.pass,
  //       },
  //     });

  //     const mailDetails = {
  //       from: notification.from,
  //       to: notification.to,
  //       subject: notification.subject,
  //       html: notification.content,
  //     };

  //     let error = null;

  //     await mailTransporter.sendMail(mailDetails, (err, data) => {
  //       if (err) {
  //         error = err;
  //       }
  //     });

  //     if (error) {
  //       await MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error
  //         }
  //       });
  //     }
  //     else {
  //       await Promise.all([
  //         MailServerModel.findByIdAndUpdate(mailServer.id, {
  //           $set: {
  //             error: error
  //           }
  //         }),
  //         UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.ERROR
  //           }
  //         })
  //       ]);
  //     }
  //   } catch (error) {
  //     await Promise.all([
  //       MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error: error.message
  //         }
  //       }),
  //       UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.ERROR
  //         }
  //       })
  //     ]);
  //   }
  // };

  // sendMailJetMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     //https://mailtrap.io/inboxes
  //     const mailTransporter = nodemailer.createTransport({
  //       host: mailServer.host,
  //       port: mailServer.port,
  //       auth: {
  //         user: mailServer.user,
  //         pass: mailServer.pass,
  //       },
  //     });

  //     const mailDetails = {
  //       from: notification.from,
  //       to: notification.to,
  //       subject: notification.subject,
  //       html: notification.content,
  //     };

  //     let error = null;

  //     await mailTransporter.sendMail(mailDetails, (err, data) => {
  //       if (err) {
  //         error = err;
  //       }
  //     });
  //     if (error) {
  //       await Promise.all([
  //         MailServerModel.findByIdAndUpdate(mailServer.id, {
  //           $set: {
  //             error
  //           }
  //         }),
  //         UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.ERROR
  //           }
  //         })
  //       ]);
  //     } else {
  //       await UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.SENT
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     await Promise.all([
  //       MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error: error.message
  //         }
  //       }),
  //       UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.ERROR
  //         }
  //       })
  //     ]);
  //   }
  // };

  // sendMailJetMailWithLib = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     // console.log("from", from);
  //     // console.log("to", to);
  //     const mail = mailjet.connect(
  //       mailServer.user,
  //       mailServer.pass
  //     );

  //     const request = mail.post("send", { version: "v3.1" }).request({
  //       Messages: [
  //         {
  //           From: {
  //             Email: notification.from,
  //             Name: notification.fromName,
  //           },
  //           To: [
  //             {
  //               Email: notification.to,
  //             },
  //           ],
  //           Subject: notification.subject,
  //           TextPart: notification.summary,
  //           HTMLPart: notification.content,
  //           CustomID: "AppGettingStartedTest",
  //         },
  //       ],
  //     });
  //     await request
  //       .then(async (result) => {
  //         await UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.SENT
  //           }
  //         });
  //       })
  //       .catch(async (err) => {
  //         await Promise.all([
  //           MailServerModel.findByIdAndUpdate(mailServer.id, {
  //             $set: {
  //               error: err.message
  //             }
  //           }),
  //           UserNotificationModel.findByIdAndUpdate(notification.id, {
  //             $set: {
  //               status: NotificationStatus.ERROR
  //             }
  //           })
  //         ]);
  //       });
  //   } catch (error) {
  //     await Promise.all([
  //       MailServerModel.findByIdAndUpdate(mailServer.id, {
  //         $set: {
  //           error: error.message
  //         }
  //       }),
  //       UserNotificationModel.findByIdAndUpdate(notification.id, {
  //         $set: {
  //           status: NotificationStatus.ERROR
  //         }
  //       })
  //     ]);
  //   }
  // };

  // sendCourierMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   try {
  //     // console.log('sendCourierMail');
  //     const courier = CourierClient({ authorizationToken: mailServer.apiKey });
  //     const courierData = await CourierModel.findOne({ category: notification.category });

  //     // console.log('notification', notification);
  //     // console.log('courierData', courierData);
  //     if (courierData) {
  //       const params = {
  //         eventId: courierData.eventId,
  //         recipientId: courierData.recipientId,
  //         profile: {
  //           email: notification.to,
  //         },
  //         data: JSON.parse(notification.context),
  //         override: {
  //         },
  //       };
  //       // console.log('params', params);
  //       await courier.send(params).then(async (data) => {
  //         await UserNotificationModel.findByIdAndUpdate(notification.id, {
  //           $set: {
  //             status: NotificationStatus.SENT
  //           }
  //         });
  //       }).catch(async (error: Error) => {
  //         // console.log('error', error);
  //         courierData.error = error.message;
  //         await Promise.all([
  //           courierData.save(),
  //           MailServerModel.findByIdAndUpdate(mailServer.id, {
  //             $set: {
  //               error: error.message
  //             }
  //           }),
  //           UserNotificationModel.findByIdAndUpdate(notification.id, {
  //             $set: {
  //               status: NotificationStatus.ERROR
  //             }
  //           })
  //         ]);
  //       });
  //     }
  //   }
  //   catch (error) {
  //     MailServerModel.findByIdAndUpdate(mailServer.id, {
  //       $set: {
  //         error: error.message
  //       }
  //     });
  //   }
  // }

  // static sendMail = async ({ notification, mailServer }: {
  //   notification: IUserNotification,
  //   mailServer: IMailServer
  // }) => {
  //   const mailHelper = new MailHelper();
  //   if (mailServer.type === ServerType.GMAIL) {
  //     await mailHelper.sendGoogleMail({ notification, mailServer });
  //   }
  //   if (mailServer.type === ServerType.MAILJET) {
  //     await mailHelper.sendMailJetMail({ notification, mailServer });
  //   }
  //   if (mailServer.type === ServerType.MAILTRAP) {
  //     await mailHelper.sendMailTrapMail({ notification, mailServer });
  //   }
  //   if (mailServer.type === ServerType.SENDGRID) {
  //     await mailHelper.sendSendgridMail({ notification, mailServer });
  //   }
  //   if (mailServer.type === ServerType.COURIER) {
  //     await mailHelper.sendCourierMail({ notification, mailServer });
  //   }
  // }

}
