import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  console.log("before", ...inputs);
  const c_str = clsx(inputs);
  const m_str = twMerge(c_str);
  console.log("after c", c_str);
  // console.log("after m", m_str);
  return m_str;
}
