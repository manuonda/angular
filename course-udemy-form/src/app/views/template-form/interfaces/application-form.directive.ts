  export interface ApplicationForm{
    name: {
      first:string;
      last:string;
    },
    email:{
      email: string;
      confirmationEmail: string;
    },
    employmentStatus: string;
    positionSelected: string;
    resumeLink: string;
    phoneNumber: string;

  }

  export type VerifyAccount= 'email' | 'phone number';
