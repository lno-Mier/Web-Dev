class Survivor:
    def __init__(self, name, energy_level, food, shelter):
        self.name = name
        self.energy_level = energy_level
        self.food = food
        self.shelter = shelter
    
    def eat(self):
        if self.food > 0:
            self.food -= 1
            self.energy_level += 1
            return f"{self.name} ate food and restored energy."
        else:
            return f"Not enough food to eat."

    def rest(self, hour):
        if hour > 0:
            self.energy_level += hour
            return f"{self.name} rested for {hour} hour(s)."
        else:
            return f"Rest time must be greater than 0."

    def perform_role(self):
        return f"Survivor is surviving."

    def __str__(self):
        return (
            f"Player's name: {self.name}\n"
            f"Player's energy level: {self.energy_level}\n"
            f"Food supply: {self.food}\n"
            f"Shelter(s): {self.shelter}"
        )


class Medic(Survivor):
    def __init__(self, name, energy_level, food, shelter, medical_kits, healing_power):
        super().__init__(name, energy_level, food, shelter)
        self.medical_kits = medical_kits
        self.healing_power = healing_power
    
    def heal(self, survivor):
        if self.medical_kits > 0:
            self.medical_kits -= 1
            survivor.energy_level += self.healing_power
            return f"{self.name} healed {survivor.name}. Energy increased by {self.healing_power}."
        else:
            return f"{self.name} has no medical kits left."

    def perform_role(self):
        return f"Medic is healing people."

    def __str__(self):
        return (
            super().__str__() + "\n"
            + f"Medical kits: {self.medical_kits}\n"
            + f"Healing power: {self.healing_power}"
        )


class Engineer(Survivor):
    def __init__(self, name, energy_level, food, shelter, tools, build_skill):
        super().__init__(name, energy_level, food, shelter)
        self.tools = tools
        self.build_skill = build_skill
    
    def build_shelter(self):
        if self.tools > 0:
            self.tools -= 1
            self.shelter += self.build_skill
            return f"{self.name} built {self.build_skill} shelter(s)."
        else:
            return f"Building is impossible. No tools left."

    def perform_role(self):
        return f"Engineer is building shelter."

    def __str__(self):
        return (
            super().__str__() + "\n"
            + f"Tools: {self.tools}\n"
            + f"Build skill: {self.build_skill}"
        )