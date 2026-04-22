export type Certification = {
  name: string;
  issuer: string;
  date: string;
  expires?: string;
};

export const certifications: Certification[] = [
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks", date: "Feb 2025", expires: "Feb 2027" },
  { name: "GitHub Actions", issuer: "GitHub", date: "Feb 2024", expires: "Feb 2027" },
  { name: "CKA: Certified Kubernetes Administrator", issuer: "The Linux Foundation", date: "Jul 2022", expires: "Jul 2025" },
  { name: "CKAD: Certified Kubernetes Application Developer", issuer: "The Linux Foundation", date: "Apr 2022", expires: "Apr 2025" },
  { name: "Oracle Certified Java Programmer, Gold SE 11", issuer: "Oracle", date: "Nov 2021" },
  { name: "Oracle Certified Java Programmer, Silver SE 11", issuer: "Oracle", date: "Aug 2021" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS", date: "Oct 2019", expires: "Oct 2022" },
  { name: "Machine Learning", issuer: "Coursera", date: "Jun 2018" },
];
