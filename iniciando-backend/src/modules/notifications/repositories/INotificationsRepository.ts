import ICreateNotificationDTO from "../dto/ICreateNotificationDTO";
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository{
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
