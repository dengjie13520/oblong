function checkPlane(in_plane){
    for(let i=0;i<in_plane.length;i++){
        let rectA = in_plane[i]
        for(let j=i+1;j<in_plane.length;j++){
            let rectB = in_plane[j]
            let wrapA = getEndPoints(rectA.coordinateOfRectCenter,rectA.size.width,rectA.size.height)
            let wrapB = getEndPoints(rectB.coordinateOfRectCenter,rectB.size.width,rectB.size.height)
            if(checkTwoRect(wrapA,wrapB)){
                console.log(`${rectA.name}和${rectB.name}存在交叉`)
            }
        }
    }
}

function checkIfInBoundary(rect,point){
    if(point.x>=rect.leftTopPoint.x 
        && point.x<=rect.rightTopPoint.x 
        && point.y<=rect.leftTopPoint.y
        && point.y>=rect.rightBottomPoint.y){
            return true
        }
    return false
}
function checkIfOnBoundary(rect,point){
    if((point.x == rect.leftTopPoint.x 
        && point.y<=rect.leftTopPoint.y
        && point.y>=rect.leftBottomPoint.x) 
        || (point.x == rect.rightTopPoint.x 
            && point.y<=rect.leftTopPoint.y
            && point.y>=rect.leftBottomPoint.x) 
        || (point.y == rect.leftTopPoint.y 
            && point.x>=rect.leftTopPoint.x
            && point.x<=rect.rightTopPoint.x) 
        || (point.y == rect.leftBottomPoint.y
            && point.x>=rect.leftTopPoint.x
            && point.x<=rect.rightTopPoint.x) ){
            return true
        }
    return false
}
function checkTwoRect(rectA,rectB){
    let i = checkIfInBoundary(rectA,rectB.leftTopPoint)?1:0
    let j = checkIfInBoundary(rectA,rectB.rightTopPoint)?1:0
    let k = checkIfInBoundary(rectA,rectB.leftBottomPoint)?1:0
    let l = checkIfInBoundary(rectA,rectB.rightBottomPoint)?1:0
    let sumIn = i+j+k+l
    if(sumIn>0 && sumIn<4){
        return true
    }else if(sumIn == 4){
        let m = checkIfOnBoundary(rectA,rectB.leftTopPoint)?1:0
        let n = checkIfOnBoundary(rectA,rectB.rightTopPoint)?1:0
        let o = checkIfOnBoundary(rectA,rectB.leftBottomPoint)?1:0
        let p = checkIfOnBoundary(rectA,rectB.rightBottomPoint)?1:0
        let sumOn = m+n+o+p
        if(sumOn>0){
            return true
        }
    }else if(sumIn == 0){
        let q = checkIfInBoundary(rectA,rectB.center)?1:0
        let r = checkIfInBoundary(rectB,rectA.center)?1:0
        if(q+r >0){
            return true
        }
    }
    return false
    
}
function getEndPoints(center,width,height){
    let leftTopPoint = {x:center.x*100 - width*100/2,y:center.y*100 + height*100/2}
    let rightTopPoint = {x:center.x*100 + width*100/2,y:center.y*100 + height*100/2}
    let leftBottomPoint = {x:center.x*100 - width*100/2,y:center.y*100 - height*100/2}
    let rightBottomPoint = {x:center.x*100 + width*100/2,y:center.y*100 - height*100/2}
    return {
        center:{
            x:center.x*100,
            y:center.y*100
        },
        leftTopPoint,
        rightTopPoint,
        leftBottomPoint,
        rightBottomPoint
    }
}

let myPlane =[
	{"name":"A","size":{"width":0.5,"height":0.8},"coordinateOfRectCenter":{"x":0.4,"y":0.5}},
	{"name":"B","size":{"width":1.5,"height":1.2},"coordinateOfRectCenter":{"x":1.6,"y":0.7}},
	{"name":"C","size":{"width":1.6,"height":1.6},"coordinateOfRectCenter":{"x":0.95,"y":2.4}},
	{"name":"D","size":{"width":0.5,"height":0.4},"coordinateOfRectCenter":{"x":2.1,"y":3.1}},
	{"name":"E","size":{"width":0.3,"height":0.6},"coordinateOfRectCenter":{"x":2.1,"y":2.4}},
	{"name":"F","size":{"width":0.3,"height":0.3},"coordinateOfRectCenter":{"x":2.2,"y":2}}
]
checkPlane(myPlane)