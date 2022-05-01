const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNewNode(this.rootNode, data);

    function addNewNode (node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addNewNode(node.left, data)
      } else {
        node.right = addNewNode(node.right, data)
      }

      return node;
    }
  }
 
  has(data) {
    return searchData(this.rootNode, data);

    function searchData(node, data){
      if(!node){
        return false
      }

      if(node.data === data){
        return true;
      }

      if(data < node.data){
        return searchData(node.left, data);
      } else{
        return searchData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(node, data){
      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        return findData(node.left, data);
      } else{
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null
        }

        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let minFromRigth = node.right;
        while(minFromRigth.left){
          minFromRigth = minFromRigth.left
        }
        node.data = minFromRigth.data;

        node.right = removeNode(node.right, minFromRigth.data)

        return node;
      }
    }
  }

  min() {
    if(!this.rootNode){
      return;
    }

    let minNode = this.rootNode;
    while(minNode.left){
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if(!this.rootNode){
      return;
    }

    let maxNode = this.rootNode;
    while(maxNode.right){
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};