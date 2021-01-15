const cases = [
  {
    case_id: 1001,
    client_id: 201,
    client_reference: 30214,
    ref_number: 20100252,
    client_name: "A.B.C Company",
    name: "Juan Dela Cruz",
    date_birth: "2020/12/24",
    gender: "Male",
    original_capital: 10000,
    actual_capital: 5000,
    dpd: "120",
    live_dpd: "160",
    assignment_date: "2020/01/01",
    assignment_end_date: "2020/12/30",
    case_status: true,
  },
  {
    case_id: 1002,
    client_id: 202,
    client_reference: 5521,
    ref_number: 20100231,
    client_name: "OOR Company",
    name: "Aida Bugg",
    date_birth: "2020/12/04",
    gender: "Female",
    original_capital: 60000,
    actual_capital: 30000,
    dpd: "110",
    live_dpd: "170",
    assignment_date: "2020/01/01",
    assignment_end_date: "2020/12/30",
    case_status: true,
  },
  {
    case_id: 1003,
    client_id: 203,
    client_reference: 5521,
    ref_number: 20100231,
    client_name: "J&J Company",
    name: "Levi Ackerman",
    date_birth: "2020/12/04",
    gender: "Male",
    original_capital: 40000,
    actual_capital: 29000,
    dpd: "50",
    live_dpd: "60",
    assignment_date: "2020/01/01",
    assignment_end_date: "2020/12/30",
    case_status: false,
  },
];

export function getCases() {
  return cases;
}

export function getCase(case_id){
  return cases.find((c) => c.case_id === case_id);
}