/** Errors in checking fields for registration. */
export interface ErrorRegistration {

  /** Errors in checking the "email" field. */
  readonly email: string | null;

  /** Errors in checking the "first name" field. */
  readonly firstName: string | null;

  /** Errors in checking the "last name" field. */
  readonly lastName: string | null;

  /** Errors in checking the "password" field. */
  readonly password: string | null;

  /** Errors not related to the field. */
  readonly nonFieldErrors: string | null;
}
