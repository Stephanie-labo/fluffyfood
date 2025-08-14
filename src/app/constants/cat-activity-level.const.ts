import { DropdownInterface } from "../types/dropdown.interface";

export const CatActivityLevels: DropdownInterface[] = [
  {
    label: "Laag",
    value: -0.1,
    description:
      "Zeer rustige kat, vooral slapend, weinig tot geen speelgedrag.",
  },
  {
    label: "Normaal",
    value: 0,
    description:
      "Gemiddelde activiteit; speelt af en toe, is alert maar niet hyperactief.",
  },
  {
    label: "Actief",
    value: 0.1,
    description: "Speelt regelmatig, nieuwsgierig, veel beweging door huis.",
  },
  {
    label: "Zeer actief",
    value: 0.2,
    description: "Altijd in beweging, energiek, klimt en rent veel.",
  },
];
