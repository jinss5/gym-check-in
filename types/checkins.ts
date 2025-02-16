export interface BodyPart {
  [key: string]: boolean; // Example: { arm: true, leg: false }
}

export interface CheckIn {
  bodyPart: BodyPart;
  timestamp: number;
}

export type CheckIns = {
  [date: string]: CheckIn;
};

export const createNewCheckInsType = (date: string): CheckIns => {
  return {
    [date]: {
      bodyPart: {},
      timestamp: Date.now(),
    },
  };
};
