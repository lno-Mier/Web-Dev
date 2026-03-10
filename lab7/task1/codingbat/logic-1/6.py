def alarm_clock(day, vacation):
    is_weekend = (day == 0 or day == 6)
    
    if vacation:
        return "10:00" if not is_weekend else "off"
    else:
        return "7:00" if not is_weekend else "10:00"