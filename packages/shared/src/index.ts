export type ScheduleCategory = "COMPANY" | "DEPARTMENT" | "GROUP" | "PERSONAL";

export interface ScheduleBase {
  id: string;
  title: string;
  description?: string;
  startsAt: string;
  endsAt: string;
  createdBy: string;
  category: ScheduleCategory;
}

export type AppRole = "USER" | "DEPT_MANAGER" | "ADMIN" | "SUPER_ADMIN";
