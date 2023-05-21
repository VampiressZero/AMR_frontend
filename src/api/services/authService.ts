import { TokenMapper } from 'store/core/mappers/token.mapper';
import { TokenDto } from 'store/core/dtos/token.dto';
import { UserMapper } from 'store/core/mappers/user.mapper';
import { User } from 'store/core/models/user';
import { UserDto } from 'store/core/dtos/user.dto';
import { Login, Registration } from 'store/core/models/auth';
import { AuthMapper } from 'store/core/mappers/auth.mapper';
import { LoginDto, RegistrationDto } from 'store/core/dtos/auth.dto';
import { AxiosError } from 'axios';
import { ErrorBase } from 'store/core/models/errorBase';
import { ErrorRegistration } from 'store/core/models/errorRegistration';
import { ErrorBaseMapper } from 'store/core/mappers/errorBase';
import { ErrorRegistrationMapper } from 'store/core/mappers/errorRegistration.mapper';

import { http } from '..';

import { LocalStorageService } from './local-storage';

const loginUrl = 'auth/login/';
const registerUrl = 'auth/register/';
const currentUserUrl = 'users/profile/';

export namespace AuthService {

  /**
   * Login a user.
   * @param loginData Login data.
   */
  export async function login(loginData: Login): Promise<ErrorBase<ErrorRegistration> | void> {
    const loginDataDto: LoginDto = AuthMapper.toDtoLogin(loginData);
    try {
      const { data } = await http.post<TokenDto>(loginUrl, loginDataDto);
      LocalStorageService.setLocalStorage(TokenMapper.fromDto(data));
    } catch (error: unknown) {
      LocalStorageService.setLocalStorage(null);

      if (!(error instanceof AxiosError) || error.response === undefined) {
        throw error;
      }
      throw ErrorBaseMapper.fromDto(error.response.data, ErrorRegistrationMapper.fromDto);
    }

  }

  /**
   * Register a user.
   * @param registerData Register data.
   */
  export async function register(registerData: Registration): Promise<ErrorBase<ErrorRegistration> | void> {
    const registerDataDto: RegistrationDto = AuthMapper.toDtoRegister(registerData);
    try {
      const { data } = await http.post<TokenDto>(registerUrl, registerDataDto);
      LocalStorageService.setLocalStorage(TokenMapper.fromDto(data));
    } catch (error: unknown) {
      LocalStorageService.setLocalStorage(null);

      if (!(error instanceof AxiosError) || error.response === undefined) {
        throw error;
      }
      throw ErrorBaseMapper.fromDto(error.response.data, ErrorRegistrationMapper.fromDto);
    }
  }

  /** Fetches a user.*/
  export async function getCurrentUser(): Promise<User> {
    const { data } = await http.get<UserDto>(currentUserUrl);
    return UserMapper.fromDto(data);
  }
}
