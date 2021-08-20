require 'json'

# constants
BACKEND = './data.json'
HELP_MESSAGE = "Usage: GET [key] || PUT [key] [val] || DELETE [key] || EXIT"

class KeyValDB
  def initialize(data)
    @data = data
  end

  def data
    return @data
  end

  def put(key, value)
    @data[key] = value
  end

  def get(key)
    p @data[key]
  end

  def delete(key)
    @data.delete(key)
  end
end

# refresh our program with the values stored in backend
file = File.read(BACKEND)
data = JSON.parse(file)
# tell KeyValDB we're ready to run by initializing!
db = KeyValDB.new(data)
# get some user command
p "Enter input to interact with db"
p HELP_MESSAGE
input = gets.split
while true
  input[0]
  case input[0]
  when 'PUT'
    db.put(key = input[1], value = input[2])
  when 'GET'
    db.get(key = input[1])
  when 'DELETE'
    db.delete(key = input[1])
  when 'EXIT'
    break
  else
    p HELP_MESSAGE
  end
  # refresh user input for next run
  input = gets.split
end
# User has exited.
# Here we update our backend to have the data next time we run the program
# Retrieves data from DbKeyVal through db.data
File.write(BACKEND, JSON.dump(db.data))
