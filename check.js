function checkPlane(in_plane){
    let yMax = in_plane.length
    let xMax = in_plane[0].length
    for(let i=0;i<yMax;i++){
        for(let j=0;j<xMax;j++){
            if(in_plane[i][j] == 1){
                if(checkDot(in_plane,i,j,yMax,xMax)){
                    return true
                }
            }
        }
    }
    return false
}
function checkDot(in_plane,i,j,yMax,xMax){
    let count = 0
    if((i==0 && j ==0) || (i==0 && j==xMax - 1) || (i==yMax -1 && j == 0) || (i==yMax-1 && j==xMax -1)){
        return false
    }else if(i == 0){
        count = in_plane[i][j-1] + in_plane[i][j+1] +in_plane[i+1][j]
    }else if(i == yMax - 1){
        count = in_plane[i][j-1] + in_plane[i][j+1] +in_plane[i-1][j]
    }else if(j == 0){
        count  = in_plane[i-1][j] + in_plane[i][j+1] +in_plane[i+1][j]
    }else if(j == xMax - 1){
        count  = in_plane[i-1][j] + in_plane[i][j-1] +in_plane[i+1][j]
    }else{
        count = in_plane[i-1][j] + in_plane[i][j-1] +in_plane[i+1][j]+ in_plane[i][j+1]
    }
    if(count >2){
        return true
    }
}
let myPlane =[
    [0,0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,1,0,1,1,1,1,0],
    [0,0,0,0,1,0,1,1,0,1,0],
    [0,0,0,0,1,0,1,1,1,1,0],
    [0,0,0,0,1,1,1,1,0,0,0]
]
console.log(`result:${checkPlane(myPlane)}`)