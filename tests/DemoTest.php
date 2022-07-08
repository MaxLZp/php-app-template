<?php
/**
 *
 */

namespace Maxlzp\Template\Test;

use Faker\Factory;
use Faker\Generator;
use PHPUnit\Framework\TestCase;

class DemoTest extends TestCase
{
    /**
     * @var Generator
     */
    protected $faker;

    /**
     *
     */
    public function setUp(): void
    {
        $this->faker = Factory::create();
    }

    /**
     * @test
     */
    public function demo(): void
    {
        $this->markTestSkipped();
    }
}
