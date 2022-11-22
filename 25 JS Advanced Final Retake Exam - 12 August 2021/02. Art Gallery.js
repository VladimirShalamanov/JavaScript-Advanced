class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        //{articleModel, articleName, quantity}
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }
        let article = this.listOfArticles.find(x => x.articleModel === articleModel);
        if (article) {
            if (article.articleName === articleName) {
                article.quantity += quantity;
            }
        }
        else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        //{guestName, points, purchaseArticle: default 0}
        let guest = this.guests.find(x => x.guestName === guestName);
        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        this.guests.push({ guestName, points: 0, purchaseArticle: 0 });
        let g = this.guests.find(x => x.guestName === guestName);
        if (personality == "Vip") {
            g.points = 500;
        }
        else if (personality === "Middle") {
            g.points = 250;
        }
        else {
            g.points = 50;
        }
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let article = this.listOfArticles.find(x => x.articleName === articleName);
        if (!article) {
            throw new Error("This article is not found.");
        }
        if (article.articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let guest = this.guests.find(x => x.guestName === guestName);
        if (!guest) {
            return `This guest is not invited.`;
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        }
        guest.points -= this.possibleArticles[articleModel];
        article.quantity--;
        guest.purchaseArticle++;
        return `${guest.guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let res = ["Articles information:"];
            this.listOfArticles.forEach(x => {
                res.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
            });
            return res.join('\n');
        }
        else if (criteria === "guest") {
            let res = ["Guests information:"];
            this.guests.forEach(x => {
                res.push(`${x.guestName} - ${x.purchaseArticle}`);
            });
            return res.join('\n');
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
