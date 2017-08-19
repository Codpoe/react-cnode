import { observable, computed, action, runInAction, useStrict } from 'mobx';
import axios from 'axios';

useStrict(true);

class Model {
    @observable currentTab = '' // 'all', 'ask', 'share', 'job', 'good'
    @observable fetchState = 'done' // 'pending', 'done', 'error'
    @observable topics = {
        all: {
            currentPage: 0,
            scrollTop: 0,
            list: []
        },
        share: {
            currentPage: 0,
            scrollTop: 0,
            list: []
        },
        ask: {
            currentPage: 0,
            scrollTop: 0,
            list: []
        },
        job: {
            currentPage: 0,
            scrollTop: 0,
            list: []
        },
        good: {
            currentPage: 0,
            scrollTop: 0,
            list: []
        },
    }

    @computed get currentLength() {
        return this.topics[this.currentTab].list.length;
    }

    @computed get currentTabCN() {
        switch (this.currentTab) {
            case 'all':
                return '最新';
            case 'share':
                return '分享';
            case 'ask':
                return '问答';
            case 'job':
                return '招聘';
        }
    }

    @computed get currentScrollTop() {
        if (this.currentTab) {
            return this.topics[this.currentTab].scrollTop;
        }
        return 0;
    }

    @action
    fetchTopics(tab = 'all') {
        console.log(`[action] fetchTopics: ${tab}`);
        let nextPage = this.topics[tab].currentPage + 1;
        this.fetchState = 'pending';
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${nextPage}&limit=20`)
            .then((res) => {
                runInAction(() => {
                    console.log('[action] fetchTopics success');
                    this.fetchState = 'done';
                    this.topics[tab].currentPage++;
                    this.topics[tab].list = this.topics[tab].list.concat(res.data.data);
                })
            })
            .catch((err) => {
                console.log('[action] fetchTopics err:');
                console.log(err);
                runInAction(() => {
                    this.fetchState = 'error';
                })
            });
    }

    @action
    switchTab(tab = 'all') {
        console.log(`[action] switchTab: ${tab}`);
        if (this.currentTab !== tab) {
            this.currentTab = tab;
        }
        this.topics[tab].currentPage = 0;
        this.topics[tab].list = [];
        this.fetchTopics(tab);
    }

    @action
    changeScrollTop(value) {
        this.topics[this.currentTab].scrollTop = value;
    }
}

export default new Model();

