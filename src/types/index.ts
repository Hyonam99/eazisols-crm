/**Interfaces are prefixed with a capital letter I for unique identification */

type UserDataType = {
	name: string;
};

interface ICardProps {
    label: string
    change?: string
    value: string
    icon: string
    avatar?: string
}

export type { UserDataType, ICardProps };
