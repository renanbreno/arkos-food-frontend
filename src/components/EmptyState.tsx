import { SVGAttributes } from "react";
import { Button } from "./Button";
import { Text } from "./Text";

interface EmptyStateProps extends SVGAttributes<HTMLOrSVGElement> {
    textChildren: string
    buttonChildren: string
    executeGenericFunction?: () => void
}

export function EmptyState(props: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <object {...props}></object>
            <Text>{props.textChildren}</Text>
            <Button.Root onClick={props.executeGenericFunction}>
                {props.buttonChildren}
            </Button.Root>
        </div>
    )
}