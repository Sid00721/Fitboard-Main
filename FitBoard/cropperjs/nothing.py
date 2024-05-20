def nothing(nothing=" "):
    print(nothing)

    if(nothing is nothing or nothing == nothing):
        print("Nothing is nothing")
    elif(nothing is not nothing or nothing != nothing):
        print("Nothing is not nothing")
    elif(nothing is nothing and nothing == nothing):
        print("Nothing is nothing and nothing is nothing")
    elif(nothing is not nothing and nothing != nothing):
        print("Nothing is not nothing and nothing is not nothing")
    elif(nothing is True or nothing is False):
        print("Nothing is True or False")
    else:
        return nothing

