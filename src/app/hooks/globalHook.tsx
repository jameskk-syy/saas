"use client";
import { type } from "os";
import { Dispatch, SetStateAction, useState } from "react";

export default function useGlobalHook() {
  const [clickedModules, setClickedModules] = useState(() => {
    const savedModules = localStorage.getItem("selectedModules");
    return savedModules ? JSON.parse(savedModules) : [];
  });
  const [planPeriod, setPlanPeriod] = useState("m");
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [selected, setSelected]: any = useState({
    1: false,
    2: false,
    3: false,
  });
  type Pattern = {
    name: boolean;
    email: boolean;
    phoneNum: boolean;
    password: boolean;
    modulesave: boolean;
    isAllTrue(): boolean;
  };
  const isPattern: Pattern = {
    name: false,
    email: false,
    phoneNum: false,
    password: false,
    modulesave: true,

    isAllTrue() {
      return this.email && this.name && this.phoneNum && this.password && this.modulesave;
    },
  };
  const moduleimagePath = {
    "Support": '/image/support.png',
    "Expense": '/image/expenses.png',
    "Payroll": '/image/payroll.png',
    "Buying": '/image/buying.png',
    "Stock": '/image/stock.png',
    "Manufacturing": '/image/manufacturing.png',
    "Selling": '/image/selling.png',
    "Accounts": '/image/accounting.png',
    "Education": '/image/education.png',
    "Quality Management": '/image/quality.png',
    "Loan Management": '/image/loan.png',
    "Projects": '/image/planning.png',
    "CRM": '/image/crm.png',
    "HR": '/image/Hr.png',
    "E-commerce": '/image/ecommerce.png',
    "Assets": '/image/assets.png',
    "POSAwesome": '/image/pos.png',
    "Subcontracting": '/image/sub.png',
    "Utilities": '/image/utilities.png'
  }
  const [selectedBtn, setSelectedBtn] = useState(1);
  // console.log("hi");
  const [name, upDateName] = useState<string>("");
  return {
    name,
    upDateName,
    selectedBtn,
    isPattern,
    setSelectedBtn,
    selected,
    setSelected,
    planPeriod,
    moduleimagePath,
    clickedModules,
    setClickedModules,
    setPlanPeriod,
    selectedPlan,
    setSelectedPlan,
  };
}
type Pattern = {
  name: boolean;
  email: boolean;
  phoneNum: boolean;
  password: boolean;
  modulesave: boolean;
  isAllTrue(): boolean;
};

export type UseGlobalHook = {
  name?: string;
  upDateName?: Dispatch<SetStateAction<string>>;
  selectedBtn?: number;
  moduleimagePath?: any;
  isPattern?: Pattern;
  setSelectedBtn?: Dispatch<SetStateAction<number>>;
  selected?: any;
  clickedModules: any;
  setClickedModules: any;
  setSelected?: any;
  planPeriod?: string;
  setPlanPeriod?: Dispatch<SetStateAction<string>>;
  selectedPlan?: string;
  setSelectedPlan?: Dispatch<SetStateAction<string>>;
};
