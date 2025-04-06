import React from "react";
import { Select } from "antd";

const CustomSelect = ({ options, label }) => {
  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <label className="text-white">{label}</label>
      <Select
        className="min-w-[200px]"
        showSearch
        style={{ width: 200 }}
        placeholder="..."
        optionFilterProp="value"
        filterSort={(optionA, optionB) =>
          (optionA?.value ?? "")
            .localeCompare((optionB?.value ?? ""))
        }
      >
        {options.map((item) => {
          return <Select.Option value={item.label}>{item.label}</Select.Option>;
        })}
      </Select>
    </div>
  );
};

export default CustomSelect;
