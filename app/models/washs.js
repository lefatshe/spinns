class Washes {
    constructor(
        id,
        categoryIds,
        title,
        unit,
        imageUrl,
        type,
        minVal,
        maxVal,
        total,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.unit = unit;
        this.imageUrl = imageUrl,
        this.minVal = minVal,
        this.maxVal = maxVal,
        this.total = total
    }
}

export default Washes
