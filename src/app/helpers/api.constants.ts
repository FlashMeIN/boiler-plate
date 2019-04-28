import { environment } from 'src/environments/environment';

export class ApiEndPoints {
    static LOGIN = environment.BASE_URL + '/login';

    static REGISTER = environment.BASE_URL + '/register';
}
