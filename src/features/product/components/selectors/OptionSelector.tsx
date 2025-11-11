import { FC } from "react";
import { Button } from "@/components/ui/buttons/button";
import { AttributeValue } from "@/features/product/services/productService";

/**
 * Local fallback mapping for attribute display names.
 * Replace this with the central import when "@/lib/constants" exists:
 * import { ATTRIBUTE_DISPLAY_NAMES } from "@/lib/constants";
 */
const ATTRIBUTE_DISPLAY_NAMES: Record<string, string> = {
  color: "Color",
  size: "Size",
  material: "Material",
};

interface OptionSelectorProps {
  title: string;
  options: AttributeValue[];
  selectedValueId: number | undefined;
  onOptionChange: (valueId: number) => void;
}

const OptionSelector: FC<OptionSelectorProps> = ({
  title,
  options,
  selectedValueId,
  onOptionChange,
}) => {
  const displayTitle =
    ATTRIBUTE_DISPLAY_NAMES[title as keyof typeof ATTRIBUTE_DISPLAY_NAMES] ||
    title.replace(/_/g, " ");

  return (
    <div>
      <p className="font-semibold mb-2 capitalize">{displayTitle}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((value) => (
          <Button
            key={value.id}
            variant={selectedValueId === value.id ? "default" : "outline"}
            onClick={() => onOptionChange(value.id)}
            className="rounded-md"
          >
            {value.value}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
