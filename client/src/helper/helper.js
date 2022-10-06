import _ from 'lodash';

export function getSum(transaction, type) {
    let sum = _(transaction)
        .groupBy("type")
        .map((transactions, key) => {
            if (!type) {
                return _.sumBy(transactions, 'amount');
            }

            return {
                'type': key,
                'color': transactions[0].color,
                'total': _.sumBy(transactions, 'amount')
            };
        })
        .value();
    return sum;
}

export function getLabels(transactions) {
    let amountSum = getSum(transactions, 'type');
    let Total = _.sum(getSum(transactions));

    let percent = _(amountSum)
        .map(objs => _.assign(objs, { percent: (100 * objs.total) / Total }))
        .value();

    return percent;
}

export function chartData(transaction, custom) {

    let bg = _.map(transaction, a => a.color);
    bg = _.uniq(bg);
    let dataValue = getSum(transaction);

    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bg,
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10
            }]
        },
        options: {
            cutout: 115
        }
    };

    return custom ?? config;
}

export function getTotal(transaction) {
    return _.sum(getSum(transaction));
}