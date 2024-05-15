class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    getAllCombinations() {
        const combinations = new Set();

        function traverse(node, prefix) {
            if (node.isEndOfWord) {
                combinations.add(prefix);
            }
            for (let char in node.children) {
                traverse(node.children[char], prefix + char);
            }
        }

        traverse(this.root, '');
        return combinations;
    }
}

module.exports = Trie
