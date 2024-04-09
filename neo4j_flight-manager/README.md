# Neo4j Flight Manager

- A proof-of-concept Python implementation of Flight management and query services using Neo4j graph database.

## Installation and Usage

1. Install the required Python packages

    `python -m pip install -r .\requirements.txt`

2. Runs the query with `main.py`

    `python main.py [departure] [arrival] [time]`

    In which:
    
    - \[departure\]: Departure Airport code
    - \[arrival\]: Arrival Airport code
    - \[time\]: Local date of departure (YYYY-MM-DD) 

    Sample: `python main.py HAN SYD 2024-04-01` to query for all possible flights from Noi Bai International Airport to Sydney Kingsford Smith Airport on April 1st, 2024.

3. Query Results: A JSON list of all possible flight paths, each path contains a list of component flight(s).

## File Structure

- `main.py`: Python driver for Neo4j query.
- `sample_data.cypher`: Cypher query for creating sample data.
- `user`: Neo4j development authentication