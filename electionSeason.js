/* During the election season, students have the opportunity to write recommendations for each other. 
In a school with N(1<=N<=100) students, you are provided with upto M (1 <=M <=500) ordered pairs in the form of(A,B), 
indicating that student A writes a recommendation for student B. However, the recommendations in this school have a 
transitive nature, meaning that if student A recommends student B, then also recommends whoever B recommends. 
This transitive relationship holds even if its is not explicitlt stated in the input. Your task is to calculate 
the number of students who are recommended by every other student. Input: parameter 1: The number of students in school 
denoted by N. Parameter 2: The number of recommendations recorded in the parameter 3, denotd by M. parameter 3: An array of
strings, each containing two integers separated by a space ( A amd B), indicating that A recommends B. Output: A single integer 
representing the number of students who are recommended by every other student. Sample Input: 3,3,["1 2","2 1","2 3"], Output : 1 */

function findRecommendedAll(N, M, recommendations){
    //Initialize adjacency lists for the original graph and the reverse graph

    const graph=Array.from({length:N},()=>[]);
    const reverseGraph=Array.from({length:N},()=>[]);

    //Build the graph and reverse graph from the recommendations
    for(let i=0;i<M;i++){
        const [A,B]=recommendations[i].split(' ').map(Number);
        graph[A-1].push(B-1);//A recommends B
        reverseGraph[B-1].push(A-1);//Reverse:B--> A
    }

    //Perform DFS to check reachability from each node in the reverse graph
    function dfs(node, visited, graph){
        visited[node]=true;
        for(const neighbour of graph[node]){
            if(!visited[neighbour]){
                dfs(neighbour,visited,graph);
            }
        }
    }

    let count=0;
    //check each student in reverseGraph to see if they are reachable by all others
    for(let student=0; student < N; student++){
        const visited=new Array(N).fill(false);
        //Perform DFS from the current student in the reverse graph
        dfs(student, visited, reverseGraph);
        //Check if all other students can reach this student
        let reachableCount=0;
        for(let i=0;i<N;i++){
            if(visited[i]) reachableCount++;
        }

        if(reachableCount === N){
            count++;
        }
    }
    return count;
}

console.log(findRecommendedAll(3,3,["1 2", "2 1", "2 3"]));