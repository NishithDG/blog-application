import Noty from "noty";
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class NotificationService {
    success(message) {
      (new Noty({
        text: message,
        type: 'success',
      })).show().setTimeout(3000);
    }
  
    error(message) {
      (new Noty({
        text: message,
        type: 'error',
      })).show().setTimeout(5000);
    }

    info(message) {
      (new Noty({
        text: message,
        type: 'info',
      })).show().setTimeout(3000);
    }
  }
