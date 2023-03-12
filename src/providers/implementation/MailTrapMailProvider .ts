import { IMailProvider, IMessage } from "../IMailProvaider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
  private _transporter: Mail;
  
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'b46da5240e73cc',
        pass: '84b46267394ac9',
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this._transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}