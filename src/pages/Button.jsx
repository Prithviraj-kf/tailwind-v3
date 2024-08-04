import { BUTTON_SIZES, BUTTON_TYPES, Button } from "@/components/ui/kfbutton.jsx";

export function ButtonComponent() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center p-20">
      <div className="gap-30 flex items-start gap-60">
        <div className="grid justify-items-start gap-20">
          <p className="small">Size Variants</p>
          <Button size={BUTTON_SIZES.TINY}>Button</Button>
          <Button size={BUTTON_SIZES.SMALL}>Button</Button>
          <Button size={BUTTON_SIZES.MEDIUM}>Button</Button>
          <Button size={BUTTON_SIZES.LARGE}>Button</Button>
        </div>

        <div className="grid justify-items-start gap-20">
          <p className="small">Type Variants</p>
          <Button type={BUTTON_TYPES.PRIMARY}>Button</Button>
          <Button type={BUTTON_TYPES.SECONDARY}>Button</Button>
          <Button type={BUTTON_TYPES.TERTIARY}>Button</Button>
          <Button type={BUTTON_TYPES.ERROR} className="text-gray-700">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
