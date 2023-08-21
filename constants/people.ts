import { faker } from "@faker-js/faker";

export type Person = {
	id: string;
	name: string;
	age: number;
	hobbies: string[];
	avatar: string;
	image: string;
	location: string;
};

function createRandomPerson(): Person {
	return {
		id: faker.string.uuid(),
		image: faker.image.url(),
		avatar: faker.image.url(),
		hobbies: Array.from({ length: 3 }).map((_) => faker.person.jobType()),
		age: +faker.number.int().toString().slice(0, 2),
		location: faker.location.state(),
		name: faker.person.fullName(),
	};
}

export const PEOPLE: Person[] = Array.from({ length: 10 }).map((_) => createRandomPerson());

const FRANK: Person = {
	age: 72,
	name: "Frank Visser",
	id: faker.string.uuid(),
	hobbies: ["Dingen", "Recht", "Maken"],
	avatar:
		"https://media.nu.nl/m/okdx94dad8x7_wd1280/rechter-frank-visser-vindt-nieuw-programma-eigentijdser.jpg",
	image:
		"https://images0.persgroep.net/rcs/xlOHcpnwNM4_vLAQMA8ME8RQaDo/diocontent/229952096/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
	location: "Maartensdijk",
};

PEOPLE.unshift(FRANK);
