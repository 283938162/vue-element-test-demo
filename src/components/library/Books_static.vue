<template>
  <div>
    <el-row style="height: 840px;">
      <!--<search-bar></search-bar>-->
      <!--v-for 指令，之后可以使用动态渲染-->
      <!--el-tooltip Element 提供的组件，用于展示鼠标悬停时的提示信息-->
      <el-tooltip effect="dark" placement="right"
                  v-for="item in books"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        :current-page="1"
        :page-size="10"
        :total="20">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Books',
    data() {
      return {
        books: [
          {
            cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
            title: '三体',
            author: '刘慈欣',
            date: '2019-05-05',
            press: '重庆出版社',
            abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
          },
          {
            cover: 'https://www.d4j.cn/wp-content/uploads/2019/10/1571211772-20180120214256.jpg',
            title: '看海的人',
            author: '小林泰三',
            date: '2019-05-05',
            press: '东京出版社',
            abs: '本书完整收录《看海的人》《门》等七篇浪漫派科幻杰作，在或温馨或哀婉的故事中，完美呈现了“白小林”设定严谨缜密的幻想世界，是了解现代日式科幻的绝佳文本，也是科幻迷不可错过的经典。\n' +
            '\n' +
            '分住在“海边”“山顶”两种不同时空的少年与少女，偶然相遇于一次祭典。迥异的时间流速，让他们年复一年苦苦等待彼此。直到有一天，少年踏上了前往“海边”寻找少女的旅程……\n' +
            '\n' +
            '在“门”边的小行星，我与年轻的舰长相遇相爱，我们一起步上探索“门”的旅途。然而一次意外，我回到了行星，舰长却“永远”地进入了那黑洞般的“门”……'
          },
          {
            cover: 'https://www.d4j.cn/wp-content/uploads/2019/10/1571208948-s27943411.jpg',
            title: '皮囊',
            author: '蔡崇达',
            date: '2019-05-05',
            press: '重庆出版社'
            ,
            abs: '一部有着小说阅读质感的散文集，也是一本“认心又认人”的书。\n' +
            '\n' +
            '作者蔡崇达，本着对故乡亲人的情感，用一种客观、细致、冷静的方式，讲述了一系列刻在骨肉间故事。一个福建渔业小镇上的风土人情和时代变迁，在这些温情而又残酷的故事中一一体现。用《皮囊》这个具有指向本质意味的书名，来表达作者对父母、家乡的缅怀，对朋友命运的关切，同时也回答那些我们始终要回答的问题。'
          },
          {
            cover: 'https://www.d4j.cn/wp-content/uploads/2019/12/1575203855-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191201203711.jpg',
            title: '庆余年',
            author: '猫腻',
            date: '2019-12-05',
            press: '重庆出版社'
            ,
            abs: '本书为网络小说，由阅文集团提供，全文共7卷。\n' +
            '\n' +
            '积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：\n' +
            '\n' +
            '东风携云雨，幼藤吐新芽。\n' +
            '\n' +
            '急催如颦鼓，洗尽茸与华。\n' +
            '\n' +
            '且待朝阳至，绿遍庭中架。\n' +
            '\n' +
            '更盼黄叶时，采得数枚瓜。\n' +
            '\n' +
            '小说讲述了叫范闲的年轻人的成长路程，庆国几十年起伏的画卷慢慢地呈现出来。几十年的历程里，我们看到的是三代风云人物的起起落落、轮转更替。两条线索，范闲的成长、叶轻眉的一生贯穿着整个小说，一明一暗，把几十年的庆国风雨尽揽其中。'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>

