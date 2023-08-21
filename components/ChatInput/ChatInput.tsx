import { Input, TextArea } from "tamagui";

export type ChatInputProps = {
	multiline?: boolean;
};

export function ChatInput({ multiline = false }: ChatInputProps) {
	return <Input />;
}
