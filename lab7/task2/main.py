from ok import Survivor, Medic, Engineer

def game(players):
    print("Starting game...")
    while True:
        command = input('''
            Enter the command:
                P — print all players
                A — perform actions for every player
                Q — quit
        ''')
        command = command.upper()
        if command == "Q":
            break

        elif command == "P":
            idx = 1
            for i in players:
                print(f"----------> Player {idx} <---------")
                print(f"{i}\n\n")
                ok += 1

        elif command == "A":
            for i in players:
                print(f"\n----- Action for {i.name} -----")
                print(i.perform_role())
                print(i.eat())

                if isinstance(i, Medic):
                    target = None
                    for p in players:
                        if p != i:
                            target = p
                            break

                    if target is not None:
                        print(i.heal(target))
                    else:
                        print(f"{i.name} has nobody to heal.")

                elif isinstance(i, Engineer):
                    print(i.build_shelter())

                else:
                    print(i.rest(1))
        else:
            print("Unknown command.")
        

    print("Have a nice day!")

def main():
    players = []
    n = int(input("Enter number of player(s): "))
    for i in range(n):
        print(f"Adding player {i + 1}...")
        name = input("Enter player's name: ")
        while True:
            try:
                energy = int(input(f"Enter energy level of {name}: "))
                break
            except Exception as e:
                print(f"Incorrect value: {e}")

        
        while True:
            try:
                food = int(input("Enter number of food: "))
                break
            except Exception as e:
                print(f"Incorrect value: {e}")

        while True:
            try:
                shelter = int(input("Enter number of shelter(s): "))
                break
            except Exception as e:
                print(f"Incorrect value: {e}")

        role = input(f'''
            Enter role of {name}:
                1) Survivor (S)
                2) Medic (M)
                3) Engineer (E)
        ''')
        role = role.upper()
        if role == 'S':
            players.append(Survivor(name, energy, food, shelter))

        elif role == "M":
            while True:
                try:
                    medical_kits = int(input("Enter number of medical kits: "))
                    break
                except Exception as e:
                    print(f"Incorrect value: {e}")
            
            while True:
                try:
                    healing_power = int(input("Enter number of healing_power: "))
                    break
                except Exception as e:
                    print(f"Incorrect value: {e}")

            players.append(Medic(name, energy, food, shelter, medical_kits, healing_power))
        
        elif role == "E":
            while True:
                try:
                    tools = int(input("Enter number of tools: "))
                    break
                except Exception as e:
                    print(f"Incorrect value: {e}")


            while True:
                try:
                    build_skill = int(input("Enter number of build_skill: "))
                    break
                except Exception as e:
                    print(f"Incorrect value: {e}")

            players.append(Engineer(name, energy, food, shelter, tools, build_skill))

        else:
            print(f"Incorrect data. As default creating (S)urvivor...")
            players.append(Survivor(name, energy, food, shelter))

    game(players)
    
if __name__ == "__main__":
    main()