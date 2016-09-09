<?php
/**
 * @author    XE Developers <developers@xpressengine.com>
 * @copyright 2015 Copyright (C) NAVER Corp. <http://www.navercorp.com>
 * @license   http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html LGPL-2.1
 * @link      https://xpressengine.io
 */

namespace Xpressengine\Migrations;

use Xpressengine\Support\Migration;

class SettingsMigration extends Migration {

    public function installed()
    {
        \DB::table('config')->insert(['name' => 'settings', 'vars' => '[]']);
        \DB::table('permissions')->insert(['siteKey'=> 'default', 'name' => 'settings', 'grants' => '[]']);
        \DB::table('permissions')->insert(['siteKey'=> 'default', 'name' => 'settings.user', 'grants' => '[]']);
    }
}
