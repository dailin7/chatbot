export interface ICourse {
  course: ICourseDetails;
  sections: ISection[];
}

export interface ICourseDetails {
  term: string;
  effectiveDate: string;
  effectiveStatus: string;
  title: string;
  shortDescription: string;
  description: string;
  equivalentId: string;
  allowMultiEnroll: string;
  maxUnits: number;
  minUnits: number;
  repeatUnitsLimit: number;
  grading: string;
  component: string;
  primaryComponent: string;
  offeringNumber: string;
  academicGroup: string;
  subject: string;
  catalogNumber: string;
  campus: string;
  academicOrg: string;
  academicCareer: string;
  cipCode: string;
  courseAttributes: ICourseAttributes[];
  campusCode: string;
  catalogLevel: string;
  subjectDesc: string;
  courseId: string;
}

export interface ICourseAttributes {
  name: string;
  value: string;
  description: string;
}

export interface ISection {
  classNumber: string;
  section: string;
  component: string;
  instructionMode: string;
  meetings: ISectionDetails[];
  courseOfferingNumber: number;
  courseId: string;
  academicGroup: string;
  subject: string;
  catalogNumber: string;
  career: string;
  description: string;
  enrollmentStatus: string;
  status: string;
  type: string;
  associatedClass: string;
  autoEnrollWaitlist?: boolean;
  autoEnrollSection1?: boolean | null;
  autoEnrollSection2?: boolean | null;
  consent: boolean;
  waitlistCapacity: number;
  minimumEnrollment: number;
  enrollmentTotal: number;
  waitlistTotal: number;
  academicOrg: string;
  location: string;
  equivalentCourseId?: number | null;
  startDate: string;
  endDate: string;
  cancelDate?: string | null;
  primaryInstructorSection: string;
  combinedSection: string;
  holidaySchedule: string;
  sessionCode: string;
  sessionDescription: string;
  term: string;
  campus: string;
  attributes: ICourseAttributes[];
  secCampus: string;
  secAcademicGroup: string;
  secCatalogNumber: string;
  meetingDays: string;
  _parent: string;
  subjectDesc: string;
  courseTitle: string;
  courseDescription: string;
  catalogLevel: string;
  termCode: string;
}

export interface ISectionDetails {
  meetingNumber: number;
  facilityId: string;
  facilityType: string;
  facilityDescription: string;
  facilityDescriptionShort: string;
  facilityGroup: boolean;
  facilityCapacity: number;
  buildingCode: string;
  room: string;
  buildingDescription: string;
  buildingDescriptionShort: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  standingMeetingPattern?: string | null;
  instructors: IInstructor[];
}

export interface IInstructor {
  displayName: string;
  role: string;
  email: string;
}
