import React from "react";
import { Select } from "antd";
import { Controller } from "react-hook-form";

const CustomSelect = ({ options, label, control }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-white">{label}</label>
      <Controller
        control={control}
        name={label}
        render={({ field: { onChange, onBlur, value, disabled } }) => (
          <Select
            className="min-w-[200px] "
            value={value}
            showSearch
            style={{ width: 200 }}
            placeholder="..."
            optionFilterProp="value"
            onSelect={(e) => { onChange(e)}}
            filterSort={(optionA, optionB) =>
              (optionA?.value ?? "").localeCompare(optionB?.value ?? "")
            }
          >
            {options.map((item) => {
              return (
                <Select.Option value={item.label}>{item.label}</Select.Option>
              );
            })}
          </Select>
        )}
      />
    </div>
  );
};

export default CustomSelect;
